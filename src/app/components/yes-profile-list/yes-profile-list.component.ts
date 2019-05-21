import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { YesProfile } from 'src/app/model/yes-profile';

@Component({
  selector: 'app-yes-profile-list',
  templateUrl: './yes-profile-list.component.html',
  styleUrls: ['./yes-profile-list.component.css']
})
export class YesProfileListComponent implements OnInit {

  myYesProfile = new YesProfile()
  yesProfiles

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getYesProfileList().subscribe(data => {
      this.yesProfiles = data;
    })
  }

  getYesProfileList(){
    this.profileService.getYesProfileList().subscribe(yesProfiles => this.yesProfiles = yesProfiles)
  }

  onKlik(){
    this.profileService.createYesProfile(this.myYesProfile).subscribe(()=>this.getYesProfileList())
  }

}
