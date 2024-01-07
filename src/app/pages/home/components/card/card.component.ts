import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.scss",
})
export class CardComponent {
  @Input({ required: false })
  title!: string;
  @Input({ required: true })
  url!: string;

  fullScreen: boolean = false;

  openFullView(): void {
    document.body.classList.add("no-scroll");
    this.fullScreen = !this.fullScreen;
  }

  closeFullScreen(): void {
    document.body.classList.remove("no-scroll");
    this.fullScreen = false;
  }
}
