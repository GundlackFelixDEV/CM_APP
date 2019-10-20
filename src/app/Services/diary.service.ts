import { Injectable } from '@angular/core';
import { Diary, Diary_Entry} from '../Models/Diary_Model';
import { AngularFireDatabase, AngularFireList, listChanges } from 'angularfire2/database';
@Injectable({
  providedIn: 'root',
})

export class DiaryService {
    Diary: Diary;
    todos$: any[];
    constructor (private db: AngularFireDatabase){
        this.Diary = new Diary();
        db.list('/DiaryEntries')
        .valueChanges()
        .subscribe((list) => {
          var that = this;
          list.forEach(function(item){
              var entry = new Diary_Entry();
              console.log(item);
              var value = {
                H: Number(item["HWPL_Value_H"]),
                L: Number(item["HWPL_Value_L"]),
                P: Number(item["HWPL_Value_P"]),
                W: Number(item["HWPL_Value_W"])
              }
              entry.set_arguments(item.date, value, item.HWPL_Text, item.Mood)
              console.log(entry);
              that.Diary.Entries.push(entry);
            });
          console.log(this.Diary.Entries);
        });
    }

    addEntry(new_entry: Diary_Entry) {
        this.Diary.Entries.push(new_entry);
        console.log(this.Diary);
    }

    getDiary(){
        return this.Diary;
    }
}
