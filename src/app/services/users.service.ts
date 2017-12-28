import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { BaseService } from "./base.service";

@Injectable()
export class UsersService {

  constructor(
    private http:Http
  ) { }

  // 获取用户列表
  getUsers(){
    return this.http.get(BaseService.BaseUrl + "/api/users")
      .map(res => res.json());
  }

}
