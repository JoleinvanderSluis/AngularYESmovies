import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { YesProfile } from 'src/app/model/yes-profile';

@Component({
  selector: 'app-show-yes-profile-by-id',
  templateUrl: './show-yes-profile-by-id.component.html',
  styleUrls: ['./show-yes-profile-by-id.component.css']
})
export class ShowYesProfileByIdComponent implements OnInit {

  private yesProfile: YesProfile;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.findById(data.id).subscribe(data => {
      this.yesProfile = data;
    })
  }

}
