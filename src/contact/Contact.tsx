import commonStyle from '../common/styles/Container.module.css'
import style from './Contact.module.css'
import {SectionTitle} from "../common/SectionTitle/SectionTitle";
import {ContactForm} from "../common/ContactForm/ContactForm";
import iconMail from "../images/forContactSection/letterForContact.svg";
import iconPhone from "../images/forContactSection/phone-call.svg";


export const Contact = () => {

    let links = [
        {icon: iconMail, name: "Mail me", href: "mailto:litvincevi@mail.ru", text: 'litvincevi@mail.ru'},
        {icon: iconPhone, name: "Call me", href: "tel:+79515642759", text: '+7 (951) 564-27-59'},
    ]

    return (
        <div className={style.contactMe}>
            <div className={`${commonStyle.container} ${style.container}`}>
                <SectionTitle allTitle={'Contact me'} partOFTitle={' me'} deleteChars={3}/>
                <div className={style.content}>
                    <div className={style.myContacts}>
                        <h3>DON'T BE SHY !</h3>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative
                            ideas or opportunities to be part of your visions.</p>
                        <div className={style.contactMeLinks}>
                            <ul>
                                {links.map((l) => {
                                    return (
                                        <li>
                                            <a href={l.href}>
                                                <div className={style.main}>
                                                    <div className={style.left}>
                                                        <img src={l.icon} alt=""/>
                                                    </div>
                                                    <div className={style.right}>
                                                        <h3>{l.name}</h3>
                                                        {l.text}
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                                }
                            </ul>
                        </div>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}