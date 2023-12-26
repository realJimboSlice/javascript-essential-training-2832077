const Pen = class {
  constructor(name, color, isClicked) {
    this.name = name;
    this.color = color;
    this.isClicked = isClicked;
  }
  click(clickStatus) {
    this.isClicked = clickStatus;
  }
};

export default Pen;
