import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

constructor(private authService: AuthService, private router: Router){}

  deslogar(){
    this.authService.signOut();
    this.router.navigateByUrl('');
  }
}
