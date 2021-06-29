const usersController = {
    formLogin: function(req,res){
        res.render("users/login")
    },
    formRegister: function(req,res){
        res.render("users/register")
    },    
}

module.exports = usersController;