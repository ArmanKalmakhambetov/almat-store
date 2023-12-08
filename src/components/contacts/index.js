import {useState} from "react";
import {useSelector} from "react-redux";


function ContactForm() {
    const [isDataSent, setIsDataSent] = useState(false);
    const selector = useSelector(state => state.usercart.userCart)
    console.log(selector)

    const url = 'https://script.google.com/macros/s/AKfycbwpZAU9bjT78oLZym24BfFLn2qXlKvAEgkxz_lETwQHK9AadBq0ZEQcCzr5iGIfw0ld/exec'

    function Submit(e) {
        const formEle = document.querySelector('form')
        e.preventDefault()
        console.log('Submitted')
        const formData = new FormData(formEle)

        fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            body: formData
        })
            .then(r =>
                r.json()
            )
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        setIsDataSent(true);
    }

    return (
        <div>
            {isDataSent ? (
                <div style={{'background':'greenyellow'}} className='p-2 border rounded m-5'>
                    <h4>Данные успешно отправлены</h4>
                </div>
            ) : (
                <div>
                    <h5>Оставьте свои контактные данные</h5>

                    <form className="form" onSubmit={(e) => Submit(e)}>
                        <div className="p-3">
                            <input className="form-control" name="name" placeholder="Имя" type="text" />
                        </div>
                        <div className="p-3">
                            <input className="form-control" name="phone" placeholder="Телефон" type="text" />
                        </div>
                        <div className="p-3">
                            <input className="form-control" name="message" placeholder="Сообщение" type="text" />
                        </div>
                        <div className="p-3">
                            <button className="btn btn-primary" type="submit">
                                Отправить
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
export default ContactForm;
