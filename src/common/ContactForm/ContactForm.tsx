import style from "./ContactForm.module.scss";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {SuperButton} from "../SuperButton/SuperButton";
import sendMessageIcon from '../../images/telegram.svg'

interface Values {
    firstName: string;
    email: string;
    subject: string
}

export const ContactForm = () => {
    return (
        <div className={style.contactForm} >
            <Formik
                initialValues={{
                    firstName: '',
                    email: '',
                    subject: ''
                }}
                onSubmit={(
                    values: Values,
                    { setSubmitting }: FormikHelpers<Values>
                ) => {
                    setTimeout(() => {
                        console.log(values.email)
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 500);
                }}
            >
                <Form className={style.form}>
                    <div className={style.inputs}>
                        <div className={style.myInput}>
                            <Field id="firstName" name="firstName" placeholder="Your name" />
                        </div>
                        <div className={style.myInput}>
                            <Field
                                id="email"
                                name="email"
                                placeholder="Your email"
                                type="email"
                            />
                        </div>
                        <div className={style.myInput}>
                            <Field id="subject" name='subject' placeholder="Your subject"/>
                        </div>
                    </div>
                    <div className={style.myTextarea}>
                        <Field as="textarea" id="message" name='message' placeholder="Your message"/>
                    </div>
                    <div>
                        <SuperButton text={'Send message'} icon={sendMessageIcon}/>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}