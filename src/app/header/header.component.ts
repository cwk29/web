import { Component, HostBinding, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @HostBinding('class') className = '';
  // icon_theme: string;
  // ariaLabel: string;
  toggleControl = new UntypedFormControl(false);

  // constructor() {
  //   this.icon_theme = 'dark';
  //   this.ariaLabel = 'Switch between dark and light mode (currently dark mode)';
  // }

  // ngOnInit(): void {
  //   if (!localStorage.theme) {
  //     localStorage.theme = 'dark';
  //   }
  // }

  // constructor(private overlay: OverlayContainer) {}
  constructor() {}
  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'dark';
      this.className = darkMode ? darkClassName : '';
      if (darkMode) {
        document.documentElement.classList.add('dark');
        // this.overlay.getContainerElement().classList.add(darkClassName);
      } else {
        document.documentElement.classList.remove('dark');
        // this.overlay.getContainerElement().classList.remove(darkClassName);
      }
    });
  }

  goToContactForm() {
    console.log('clicked contact us');
  }

  // toggleTheme() {
  //   if (localStorage.theme === 'dark') {
  //     // Whenever the user explicitly chooses light mode
  //     localStorage.theme = 'light';
  //   } else {
  //     // Whenever the user explicitly chooses dark mode
  //     localStorage.theme = 'dark';
  //   }
  //   this.icon_theme = localStorage.theme;

  //   this.ariaLabel = `Switch between dark and light mode (currently ${localStorage.theme} mode`;
  // }
}
