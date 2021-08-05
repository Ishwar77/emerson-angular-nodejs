import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { FlashMessagesService } from 'angular2-flash-messages';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpc: HttpClient,
    private toastr: ToastrService,
    private router: Router) { }

  private token: any;
  private userid: any;
  private tokenexptimer: any;
  private user_role = -1;
  public AuthStatusEmitter = new Subject<{ authstate: boolean, authrole: number }>();

  userlogin(EmailInput: string, PasswordInput: string) {


    const authdata = {
      username: EmailInput,
      password: PasswordInput,
    };
    // console.log(authdata);

    this.httpc.post<{ token: string, expiresIn: number, userid: string, user_role: number }>(environment.apiUrl + '/api/users/login', authdata)
      .subscribe((result) => {
        console.log(result);
        //this._flashMessagesService.show('User Login Successfull', { cssClass: 'alert-success', timeout: 5000 });
        this.showSuccess();

        if (result) {
          this.token = result.token;
          this.userid = result.userid;
          const timervalue = result.expiresIn;

          this.setAuthotimer(timervalue);
          const current_date = new Date();
          const exp_date = new Date(current_date.getTime() + timervalue * 1000);

          this.saveAuthDataLocal(this.token, exp_date, this.userid, this.user_role);
          this.AuthStatusEmitter.next({
            authstate: true,
            authrole: this.user_role
          });
          this.router.navigate(['home']);
        }
      },
        error => {
          this.AuthStatusEmitter.next({
            authstate: false,
            authrole: -1
          });
        });
  }


  private saveAuthDataLocal(token: string, expiresInDate: Date, userid: string, userrole: number) {
    localStorage.setItem('token', token);
    localStorage.setItem('userid', userid);
    localStorage.setItem('userrole', userrole.toString());
    localStorage.setItem('expirationDate', expiresInDate.toISOString());
  }

  private setAuthotimer(duration: number) {
    setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

  logout() {
    this.token = null;
    this.userid = null;
    this.AuthStatusEmitter.next({
      authstate: false,
      authrole: -1
    });
    clearTimeout(this.tokenexptimer);
    this.clearAuthData();
    // this.router.navigate(['/login/' + this.table_id]);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('userid');
    localStorage.removeItem('userrole');
    localStorage.removeItem('expirationDate');
  }

  showSuccess() {
    this.toastr.success('login success full');
  }


}


