import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { NavigationDrawer } from "igniteui-angular/main";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-navdrawer",
  styleUrls: ["./navdrawer.component.css"],
  templateUrl: "./navdrawer.component.html"
})
export class NavdrawerComponent implements OnInit {

  public navItems: any[];
  public selected = "Avatar";
  @ViewChild(NavigationDrawer) public drawer: NavigationDrawer;

  constructor() { }

  public ngOnInit() {
    this.navItems = [
      { name: "account_circle", text: "Avatar" },
      { name: "error", text: "Badge" },
      { name: "group_work", text: "Button Group" },
      { name: "home", text: "Card" },
      { name: "view_carousel", text: "Carousel" },
      { name: "date_range", text: "Date picker" },
      { name: "all_out", text: "Dialog" },
      { name: "web", text: "Forms" },
      { name: "android", text: "Icon" },
      { name: "list", text: "List" },
      { name: "arrow_back", text: "Navbar" },
      { name: "menu", text: "Navdrawer" },
      { name: "poll", text: "Progress Indicators" },
      { name: "linear_scale", text: "Slider" },
      { name: "swap_vert", text: "Scroll" },
      { name: "feedback", text: "Snackbar" },
      { name: "tab", text: "Tabbar" },
      { name: "android", text: "Toast" }
    ];
    this.drawer.isOpen = true;
  }

  public navigate(item) {
    this.selected = item.text;
    if (!this.drawer.pin) {
      this.drawer.close();
    }
  }
}
