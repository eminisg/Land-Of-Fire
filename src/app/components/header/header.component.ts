import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  scrollSubscribe = () => {
    const sections = Array.from(document.getElementsByClassName('section'));
    const navLink = Array.from(document.getElementsByClassName('nav-link'));
    let current = "";

    if (localStorage.getItem('active_link') !== 'quote' && localStorage.getItem('active_link') !== 'employment') {
      sections.forEach((section: any) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 86) {
          current = section.getAttribute("id");
        }
      });

      navLink.forEach((li) => {
        li.classList.remove("link_active");
        if (li.classList.contains(current)) {
          li.classList.add("link_active");
        }
      });
    }

    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      this.activeLink('contacts');
    }
  }

  constructor(private router: Router) {
  }


  ngOnInit() {
    if (localStorage.getItem('active_link') === null) {
      localStorage.setItem('active_link', 'home');
      this.navigateTo(<string>localStorage.getItem('active_link'))
    }
    const section = localStorage.getItem('active_link');
    this.navigateTo(<string>section)
  }

  ngOnDestroy() {
  }

  ngAfterViewInit() {
  }

  activeLink(section: string | null) {
    if (section !== null) {
      let navLink = Array.from(document.getElementsByClassName('nav-link'));
      navLink.forEach(item => {
        item.classList.remove('link_active');
        if (item.classList.contains(section)) {
          item.classList.add('link_active');
        }
      });
      window.clearTimeout()
    }
  }

  goTo = (path: string) => {
    this.router.navigate([path]);
  }

  navigateTo(section: string) {
    this.toggleAction()
    window.removeEventListener('scroll', this.scrollSubscribe);
    localStorage.setItem('active_link', section);
    if (section === 'home' || section === 'service' || section === 'about' || section === 'contacts') {
      if (section === 'home') {
        this.goTo('');
        window.scrollTo({top: 0, behavior: 'smooth'});
      } else {
        this.goTo('');
        setTimeout(() => {
          const scroll = document.getElementById(section && section)!.offsetTop;
          window.scrollTo({top: scroll - 80, behavior: 'smooth'})
        }, 100);
      }
    } else if (section === 'quote' || section === 'employment') {
      switch (section) {
        case 'quote':
          this.onPageChange(section);
          break;
        case 'employment':
          this.onPageChange(section);
          break;
      }
    }
    this.activeLink(section);
    setTimeout(()=>{
      this.customAddEventListener()
    },900);
  }

  onPageChange(section: string) {
    this.goTo(section);
    scrollTo({top: 0});
    this.removeEventListener();
    this.activeLink(section);
  }

  removeEventListener() {
    window.removeEventListener('scroll', this.scrollSubscribe);
  }

  customAddEventListener() {
    window.addEventListener('scroll', this.scrollSubscribe);
  }

  toggleAction() {
    const toggle = document.getElementById('navbarSupportedContent') as any;
    toggle.classList.remove('show')
  }
}
