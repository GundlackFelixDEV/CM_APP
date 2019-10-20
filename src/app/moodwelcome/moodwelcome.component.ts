import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { Diary_Entry } from '../Models/Diary_Model';
import { DiaryService } from '../Services/diary.service';
import { Router, NavigationStart, NavigationEnd} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-moodwelcome',
  templateUrl: './moodwelcome.component.html',
  styleUrls: ['./moodwelcome.component.scss']
})
export class MoodwelcomeComponent implements OnInit {
  entry : Diary_Entry;
  init_x:any;
  end_x:any;

  constructor(private service: DiaryService, private router: Router, private http_client: HttpClientModule) {
    this.service = service;
    this.http_client = http_client
    this.entry = new Diary_Entry();
    this.init_x = 137;
    this.end_x = 340;
  }

  ngOnInit() {
  }


  onSubmit(){
    var DateObj = new Date();
    var myDate = ('0' + DateObj.getDate()).slice(-2) + "-" + ('0' + (DateObj.getMonth() + 1)).slice(-2)  + "-" +  DateObj.getFullYear().toString().slice(-2);
    this.entry.Date = myDate
    this.entry.HWPL_Text = $("#HWPL_Text").val()
    this.service.addEntry(this.entry);
    $("#mood-welcome-component").addClass("hidden")
    $("#dashboard-component").removeClass("hidden")

    const http = new XMLHttpRequest();
    const url = "http://192.168.20.95:8000/recommandation";
    var data = {
      "sent":this.entry.HWPL_Text,
      "lia": this.entry.HWPL_Value.W,
      "health": this.entry.HWPL_Value.H,
      "fun": this.entry.HWPL_Value.P,
      "love": this.entry.HWPL_Value.L,
      "functions_name":"sleep&&go to the doctor&&eat well&&spend time with friends&&go drink a beer&&spend time with family&&make some exercise"
    }

    console.log(data)

    $.ajax({
        url : url,
        data : data,
        method : 'post',
        dataType : 'json',
        success : function(response){
            console.log("funciona bien");
        },
        error: function(error){
            console.log("No funciona");
        }
    });


    // http.open("POST", url, true);
    // http.setRequestHeader("Content-Type", "application/json");
    // console.log(JSON.stringify(data))
    // http.send(JSON.stringify(data));
    //
    //
    // http.onreadystatechange = (e) => {
    //   console.log("##############################")
    //   console.log(http.responseText)
    // }

    this.entry = new Diary_Entry()
    this.router.navigate(["/Dashboard"])
    //window.history.pushState(null, "/home", "/Dashboard?debug=true");
  }

  onChangeValue(event, target: String){
    console.log("Change " + target)
    let x = event.clientX;     // Get the horizontal coordinate
    var val = parseInt(((x-137)/203*100).toFixed())
    if(target=="H")
    {
    this.entry.HWPL_Value.H = val;
    }
    else if (target=="W")
    {
    this.entry.HWPL_Value.W = val;
    }
    else if (target=="P")
    {
    this.entry.HWPL_Value.P = val;
    }
    else if (target=="L")
    {
    this.entry.HWPL_Value.L = val;
    }
  }


  click_cold(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#cold_face").addClass("selected")
    this.entry.Mood = 1
    localStorage.setItem('smiley', "cold");
  }


  click_sick(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#sick_face").addClass("selected")
    this.entry.Mood = 2
    localStorage.setItem('smiley', "sick");
  }


  click_happy(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#happy_face").addClass("selected")
    this.entry.Mood = 3
    localStorage.setItem('smiley', "happy");
  }


  click_super(){
    $("#cold_face").removeClass("selected")
    $("#sick_face").removeClass("selected")
    $("#happy_face").removeClass("selected")
    $("#super_face").removeClass("selected")
    $("#super_face").addClass("selected")
    this.entry.Mood = 4
    localStorage.setItem('smiley', "super");
  }





}
