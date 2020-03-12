 new Vue({
     el: "#app",
     data: {
         email: "",
         password: "",
         newEmail: "",
         newPassword: "",
         displayResult: false,
     },
     methods: {
         displayLoginDetails() {
             if (this.email && this.password) {
                 this.displayResult = true;
                 this.newEmail = this.email;
                 this.newPassword = this.password
             } else {
                 this.email = "Please Enter valid email";
                 this.password = "Please Enter correct password"
             }
             this.email = "";
             this.password = ""
         },

     }

 })