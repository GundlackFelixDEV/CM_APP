export enum Mood {
    Low = 1,
    Medium,
    High
}


export class Diary_Entry {

  Date: String;
  HWPL_Value: {H: Number, W: Number, P: Number, L: Number};
  HWPL_Text: String;
  Mood: Mood;

  constructor(){
    this.Date = "";
    this.HWPL_Value = {
      H:50,
      W:50,
      P:50,
      L:50
    };
    this.HWPL_Text="";
    this.Mood = 1;
  }

  set_arguments(date: String, hwpl_value: any, text: String, mood: any){
    this.Date = date;
    this.HWPL_Value = hwpl_value;
    this.HWPL_Text=text;
    this.Mood = mood;
  }
};

export class Diary {
  Entries: Array<Diary_Entry>;

  constructor(){
    this.Entries = []
  }

}
