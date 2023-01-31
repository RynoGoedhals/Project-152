AFRAME.registerComponent("view", {
    schema: {
        clickCounter: {type: "number", default: 0}
    },

    update: function() {
        window.addEventListener("click", () => {
            this.data.clickCounter = this.data.clickCounter +1;

            if(this.data.clickCounter === 1){
                const rotation = {x: 0, y: 100, z: 0};

                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounter === 2){
                const rotation = {x: 0, y: 200, z: 0};

                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounter === 3){
                const rotation = {x: 0, y: 250, z: 0};

                this.el.setAttribute("rotation", rotation);
            } else if(this.data.clickCounter === 4){
                const rotation = {x: 0, y: 0, z: 0};

                this.el.setAttribute("rotation", rotation);

                this.data.clickCounter = 0;
            }
        })
    }
})