import style from "./ContactForm.module.scss";
import {Field, Form, Formik, FormikHelpers} from "formik";
import axios from "axios";
import icon from "./../../images/telegram.svg"

interface Values {
    firstName: string;
    email: string;
    subject: string;
    message: string
}

function validateEmail(value: string) {
    let error;
    if (!value) {
        error = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = 'Invalid email address';
    }
    return error;
}

function validateName(value: string) {
    let error;
    if (!value) {
        error = 'Name is required';
    }
    return error;
}
function validateMessage(value: string) {
    let error;
    if (!value) {
        error = 'Message is required';
    }
    return error;
}

export const ContactForm = () => {


    return (
        <div className={style.contactForm} >
            <Formik
                initialValues ={{
                    firstName: '',
                    email: '',
                    subject: '',
                    message: ''

                }}

                onSubmit={(
                    values: Values,
                    { setSubmitting, resetForm }: FormikHelpers<Values>,
                ) => {

                    axios.post("https://smtpnodejs-server.herokuapp.com/sendMessage", {
                        firstName: values.firstName,
                        email: values.email,
                        subject: values.subject,
                        message: values.message,
                    })
                        .then(() => {
                            alert("Your message has been sent")
                            resetForm()
                        })
                    // setTimeout(() => {
                    //     console.log(values.email)
                    //     alert(JSON.stringify(values, null, 2));
                    //     setSubmitting(false);
                    //
                    // }, 500);
                }}

            >
                {({ errors, touched, validateField, validateForm }) => (
                    <Form className={style.form}>
                        <div className={style.inputs}>
                            <div className={style.myInput}>
                                <Field validate={validateName} className={style.testInput} id="firstName" name="firstName" placeholder="Your name" />
                                {errors.firstName && touched.firstName && <div className={style.error}>{errors.firstName}</div>}
                            </div>
                            <div className={style.myInput}>
                                <Field
                                    validate={validateEmail}
                                    className={style.testInput}
                                    id="email"
                                    name="email"
                                    placeholder="Your email"
                                    type="email"
                                />
                                {errors.email && touched.email && <div className={style.error}>{errors.email}</div>}
                            </div>
                            <div className={style.myInput}>
                                <Field className={style.testInput} id="subject" name='subject' placeholder="Your subject"/>
                            </div>
                        </div>
                        <div className={style.myTextarea}>
                            <Field validate={validateMessage} className={style.testTextarea} as="textarea" id="message" name='message' placeholder="Your message"/>
                            {errors.message && touched.message && <div className={style.error}>{errors.message}</div>}
                        </div>
                        <div>
                            <button type={"submit"} >
                                <span className={style.buttonText}>Send message</span>
                                <div className={style.icon}>
                                    <img src={icon} alt=""/>
                                </div>
                            </button>
                        </div>
                    </Form>
                )}

                {/*<Form className={style.form}>*/}
                {/*    <div className={style.inputs}>*/}
                {/*        <div className={style.myInput}>*/}
                {/*            <Field className={style.testInput} id="firstName" name="firstName" placeholder="Your name" />*/}
                {/*        </div>*/}
                {/*        <div className={style.myInput}>*/}
                {/*            <Field*/}
                {/*                className={style.testInput}*/}
                {/*                id="email"*/}
                {/*                name="email"*/}
                {/*                placeholder="Your email"*/}
                {/*                type="email"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*        <div className={style.myInput}>*/}
                {/*            <Field className={style.testInput} id="subject" name='subject' placeholder="Your subject"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={style.myTextarea}>*/}
                {/*        <Field className={style.testTextarea} as="textarea" id="message" name='message' placeholder="Your message"/>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <button type={"submit"} >*/}
                {/*            <span className={style.buttonText}>Send message</span>*/}
                {/*            <div className={style.icon}>*/}
                {/*                <img src={icon} alt=""/>*/}
                {/*            </div>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</Form>*/}
            </Formik>
        </div>
    )
}