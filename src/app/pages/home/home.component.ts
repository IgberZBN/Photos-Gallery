import { Component } from "@angular/core";
import { CardComponent } from "./components/card/card.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  images: string[] = [];
  limit: number = 6;

  loadMoreImages() {
    this.limit += 3;
  }
}
