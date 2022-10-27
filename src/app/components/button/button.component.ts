import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input() type: string = "button";
  @Input() label: string = "";
  @Input() color: string = "primary";
  @Output() btnClick = new EventEmitter();
  @Input() isDisabled: boolean = false;

  public bgColor: string;
  public btnText: string;

  private buttonBgColors: { [key: string]: string } = {
    primary: "bg-gradient-to-l from-primary to-primary/80",
    accent: "bg-gradient-to-l from-accent to-accent/80",
    success: "bg-success",
    danger: "bg-danger",
    warning: "bg-warning",
    info: "bg-info",
    dark: "bg-dark",
    darker: "bg-darker",
    default: "bg-default",
  };

  constructor() {
    this.btnText = "";
    this.bgColor = this.buttonBgColors["primary"];
  }

  ngOnInit(): void {
    this.btnText = this.label;
    this.bgColor = this.buttonBgColors[this.color];
  }

  onClick() {
    this.btnClick.emit();
  }
}
