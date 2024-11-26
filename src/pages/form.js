import React, { useState } from 'react';

const Form = () => {

    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        celular: '',
        consumoMensal: ''
    });

    const handleChange = (e) => {
        /*  setFormData({
             ...formData,
             [e.target.name]: e.target.value
         }); */
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData);
        // Aqui você pode adicionar a lógica para enviar os dados para um backend, por exemplo.
    };

    async function sendEmail(name, email, subject, message) {
   /*      const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.set('Authorization', 'Basic ' + btoa('<API Key>'+":" +'<Secret Key>'));
      
        const data = JSON.stringify({
          "Messages": [{
            "From": {"Email": "<YOUR EMAIL>", "Name": "<YOUR NAME>"},
            "To": [{"Email": email, "Name": name}],
            "Subject": subject,
            "TextPart": message
          }]
        });
      
        const requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: data,
        };
      
        fetch("https://api.mailjet.com/v3.1/send", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error)); */
      
      }
      
      // define your own email api which points to your server.
     /*  app.post('/api/sendemail/', function (req, res) {
        const {name, email, subject, message} = req.body;
        //implement your spam protection or checks.
        sendEmail(name, email, subject, message);
      }); */


    return (
        <section className=" card-flutuante">
            <h1 className="titulo-form">Simulação gratuita</h1>
            <form onSubmit={handleSubmit} >
                <div className="row">
                    <label>Nome Completo</label>
                    <div className="form-group input-group">

                        <div className="input-group-prepend">
                            <span className="input-group-text fa fa-user"> <i className=""></i> </span>
                        </div>
                        <input  className="form-control" name='nomeCompleto' onChange={handleChange} placeholder="Nome completo" type="text" />
                    </div>
                </div>

                <div className="row">
                    <label>E-mail</label>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input className="form-control" name='email' onChange={handleChange} placeholder="Email" type="email" />
                    </div>
                </div>

                <div className="row">
                    <label>Celular</label>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                        </div>
                        {/*   <select value='55'  className="custom-select" defaultValue={'55'} style={{ maxWidth: 120 + 'px' }} >
                            <option value='55' selected="">+55</option>
                        </select> */}
                        <input className="form-control" name='celular' onChange={handleChange} placeholder="045 999 999999" type="text" />
                    </div>
                </div>

                <div className="row">
                    <label>Qual o valor médio mensal da sua conta de luz:
                    </label>

                    <div className="form-group input-group">

                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-building"></i> </span>
                        </div>
                        <select className="form-control" value={formData.consumoMensal} name='consumoMensal' onChange={handleChange} >
                            <option value={null}> Selecione a media do seu consumo mensal</option>
                            <option value={'ATE_1000'}>até R$ 1000,00</option>
                            <option value={'ENTRE_1000_2000'}>Entre R$ 1000,00 até R$ 2000.00</option>
                            <option value={'ENTRE_2000_3000'}>Entre R$ 1000,00 até R$ 3000.00</option>
                            <option value={'ACIMA_3000'}>Acima de R$ 3000.00</option>
                        </select>
                    </div>
                </div>

                <button type="submit" className=" sustainability-btn w-100">
                    <i className="fas fa-leaf"></i>
                    Simular
                </button>
                {/*   <button  className="btn btn-primary btn-block"> Simular </button> */}

            </form>
        </section>
    )
}

export default Form;