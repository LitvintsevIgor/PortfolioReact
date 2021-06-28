import commonStyle from '../common/styles/Container.module.css'
import style from './Contact.module.scss'
import {SectionTitle} from "../common/SectionTitle/SectionTitle";
import {ContactForm} from "../common/ContactForm/ContactForm";
import iconMail from "../images/forContactSection/mail.svg";
import iconPhone from "../images/forContactSection/phone-call.svg";
import fbIcon from '../images/forContactSection/free-icon-facebook-2111392.svg'
import instIcon from '../images/forContactSection/free-icon-instagram-1384031.svg'
import linkedinIcon from '../images/forContactSection/free-icon-linkedin-letters-25325.svg'
import vkIcon from '../images/forContactSection/vk.svg'


export const Contact = () => {

    let links = [
        {icon: iconMail, name: "Mail me", href: "mailto:litvincevi@mail.ru", text: 'litvincevi@mail.ru'},
        {icon: iconPhone, name: "Call me", href: "tel:+79515642759", text: '+7 (951) 564-27-59'},
    ]


    let socialIcons = [fbIcon, instIcon, linkedinIcon, vkIcon]

    return (
        <div className={style.contactMe}>
            <div className={style.container}>
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
                        <div className={style.socialIcons}>
                            {
                                socialIcons.map( (i) => {
                                    return (
                                        <div className={style.socialIcon} >
                                            <a href="">
                                                <img src={i} className={style.forImg}/>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}