            function mostra(id) {
                if (document.getElementById(id).style.display == 'block'){
                document.getElementById(id).style.display = 'none';
                }else {document.getElementById(id).style.display = 'block';}
    }
    
                      jQuery.validator.addMethod("espaco",function(value,element){
                        if(value.indexOf(" ")>=0){
                            return true
                        }else{
                            return false
                        }
                    },"Nome completo requerido")
                    
                    
                    
                    $(document).ready(function(){
                        $("#formulario").validate({
                            rules:{
                                nome:{
                                    required: true,
                                    minlength: 10,
                                    espaco: true
                                     },
                                    email:{
                                    required: true,
                                    email: true
                                },
                                  duvidas:{
                                      maxlength:400
                                  },  
                            },
                                submitHandler: function(form){
                                alert("Cadastrado com sucesso")
                            },
                        })
                        })