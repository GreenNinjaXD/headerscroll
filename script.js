class Scroll {
    constructor(info) {
        if (typeof info.element == 'string') {
            this.el = document.querySelector(info.element);
        } else if (info.element instanceof HTMLElement) {
            this.el = info.element
        }

        this.el.style.position = 'fixed'
        this.range = info.top
        this.el.style.top = this.scrollUnit()
        this.unit = info.unit ?? '%'
        this.move()

        window.addEventListener('scroll', () => this.move())
        window.addEventListener('resize', () => this.move())
    }

    move() {

        this.scrollValue = this.scrollUnit()
        console.log(window.innerHeight);
        console.log(this.range);
        console.log(this.el.clientHeight);
        if (this.scrollValue - scrollY > 0) {
            this.el.style.top = this.scrollValue - scrollY + 'px'
        } else {
            this.el.style.top = 0
        }
    }
    scrollUnit() {
        if (this.unit == 'px') {
            return this.range >= 0 ? this.range : 0
        } else if (this.unit == '%') {
            return window.innerHeight / 100 * this.range - this.el.clientHeight
        }
    }

}


let myScroll = new Scroll(
    {
        element: '.header__nav',
        top: 0,
        unit: 'px'
    }
)

console.log(myScroll);

class Header {
    constructor(info) {
        this.text = document.querySelector(info);
        this.text.addEventListener('mouseenter', () => this.moveText());
    }

    moveText() {
        let text = this.text;
        let textMove = text.getBoundingClientRect();
        let x = Math.random() * (window.innerWidth - textMove.width);
        let y = Math.random() * (window.innerHeight - textMove.height);
        text.style.position = 'absolute';
        text.style.top = `${y}px`;
        text.style.left = `${x}px`;
    }

}

let hd = new Header('.header__content');