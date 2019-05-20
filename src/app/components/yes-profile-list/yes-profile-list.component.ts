import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { YesProfile } from '../model/yes-profile';

@Component({
  selector: 'app-yes-profile-list',
  templateUrl: './yes-profile-list.component.html',
  styleUrls: ['./yes-profile-list.component.css']
})
export class YesProfileListComponent implements OnInit {

  private yesProfiles: YesProfile[];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.list().subscribe(data => {
      this.yesProfiles = data;
    })
  }

}
