import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
import { YesProfile } from 'src/app/model/yes-profile';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-show-yes-profile-by-id',
  templateUrl: './show-yes-profile-by-id.component.html',
  styleUrls: ['./show-yes-profile-by-id.component.css']
})
export class ShowYesProfileByIdComponent implements OnInit {

  private yesProfile

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() : void {
    const id = +this.route.snapshot.params["id"];

    this.profileService.findYesProfileById(id).subscribe( yesProfile => {
      this.yesProfile = yesProfile;
    })
  }

}
