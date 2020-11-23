<template>
    <div class="modal">
        <div class="modalHead">
            <h2>Login</h2>
            or <span style="color: #fc8019">Sign Up here</span>
            <div style="float: right">
                <span @click="closeModal()" class="material-icons closeModal">
                    clear
                </span>
            </div>
        </div>
        <div class="modalBody">
            <div class="userNameWrap py10">
                <input type="text" class="username inputs" />
                <span class="floating-label-username">Your Username</span>
            </div>
            <div class="passwordWrap py10">
                <input type="text" class="password inputs"/>
                <span class="floating-label-password">Your Password</span>
            </div>
            <div class="py10" style="background: #282832; color: white; text-align: center; padding: 10px; margin: 23px 10px;">
                <button>Log In</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        closeModal () {
            this.$emit('closeTheModal', false)
        }
    }
}
</script>
<style scoped lang="scss">
    .modal {
        width: 450px;
        border: 1px solid #a7a7a7;
        border-radius: 5px;
        padding: 0px 40px;
        background: white;
    }
    .modalHead {
        padding: 15px 10px;
    }
    .username:focus ~ .floating-label-username{
        top: 0px;
        bottom: 0px;
        left: 20px;
        font-size: 11px;
        opacity: 1;
    }

    .username {
        font-size: 14px;
        width: 200px;
        height: 35px;
        border-bottom: 1px solid black;
        width: 100%;
    }

    .floating-label-username {
        position: absolute;
        pointer-events: none;
        left: 10px;
        font-size: 15px;
        top: 20px;
        transition: 0.2s ease all;
    }
    .userNameWrap {
        position: relative;
    }
    .password:focus ~ .floating-label-password{
        top: 0px;
        bottom: 0px;
        left: 20px;
        font-size: 11px;
        opacity: 1;
    }

    .password {
        font-size: 14px;
        width: 200px;
        height: 35px;
        border-bottom: 1px solid black;
        width: 100%;
    }

    .floating-label-password {
        position: absolute;
        pointer-events: none;
        left: 10px;
        font-size: 15px;
        top: 20px;
        transition: 0.2s ease all;
    }
    .passwordWrap {
        position: relative;
    }
    .inputs {
        margin: 10px 0px;
    }
    .underline {
       text-decoration: none; 
       position: relative; 
     }   

    .underline:after {
        position: absolute;
        content: '';
        height: 2px;
		  /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
        bottom: -4px; 


       /****** 
       optional values below 
       ******/
        
        /* center - (optional) use with adjusting width   */
        margin: 0 auto;
		  left: 0;
        right: 0;
		  width: 50%;
		  background: green;
		  
		  /* optional animation */
		  -o-transition:.5s;
  		  -ms-transition:.5s;
        -moz-transition:.5s;
        -webkit-transition:.5s;
        transition:.5s;
    }
    .closeModal {
        position: absolute;
        top: 20px;
        right: 40px;
        cursor: pointer;
    }
</style>