export class Component {
    #element = null

    constructor(tag, parent, options) {
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }

    build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)
        return this //retorna a prórpia instância
    }

    render() {
        if (this.parent instanceof Component) {
            this.parent.getElement().append(this.#element)
        } else {
            document.querySelector(this.parent).append(this.#element)
        }
    }
}

