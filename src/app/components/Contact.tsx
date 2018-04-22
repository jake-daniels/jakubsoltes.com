
import React from 'react'

const SEND_CONFIRM_TIMEOUT = 4000

enum EField {
	Name = 'name',
	Email = 'email',
	Message = 'message',
}

export interface IContactData {
	name: string,
	email: string,
	message: string,
}

interface IValidity {
	name: null | boolean,
	email: null | boolean,
	message: null | boolean,
}

interface IState {
	values: IContactData,
	validity: IValidity,
	isWarningVisible: boolean,
	isMessageSent: boolean,
}

interface IProps {
	onSend: (data: IContactData) => void,
	onHide: () => void,
}

export default class Contact extends React.PureComponent<IProps, IState> {

	content = React.createRef<HTMLDivElement>()

	state: IState = {
		values: {
			name: '',
			email: '',
			message: '',
		},
		validity: {
			name: null,
			email: null,
			message: null,
		},
		isWarningVisible: false,
		isMessageSent: false,
	}

	componentDidMount () {
		document.body.style.overflow = 'hidden'
		setTimeout(() => this.content.current!.classList.add('visible'), 0)
	}

	componentWillUnmount () {
		document.body.style.overflow = 'visible'
	}

	setFieldValue = (id: EField, value: any) => {
		const values = {...this.state.values}
		values[id] = value
		this.setState({values})
	}

	validateField = (id: EField) => {
		const value = this.state.values[id]
		const isFieldValid = this.isFieldValid(id, value)
		const validity = {...this.state.validity}
		validity[id] = isFieldValid
		this.setState({validity})
	}

	validateAllFields = () => {
		const formValues = this.state.values
		const validity = Object.keys(formValues).reduce((result, fieldId) => {
			const value = formValues[fieldId]
			result[fieldId] = this.isFieldValid(fieldId as EField, value)
			return result
		}, {} as IValidity)
		this.setState({validity})
	}

	isFieldValid = (id: EField, value: string) => {
		if (id === EField.Name) {
			return (value !== '')
		}
		if (id === EField.Email) {
			const regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
			return regex.test(value)
		}
		if (id === EField.Message) {
			return (value !== '')
		}
		return true
	}

	sendMessage = () => {
		const {values, validity} = this.state
		const isFormValid = Object.keys(validity).every((key) => validity[key] === true)

		if (isFormValid) {
			this.props.onSend(values)
			this.setState({isMessageSent: true})
			setTimeout(() => this.props.onHide(), SEND_CONFIRM_TIMEOUT)
		} else {
			this.setState({isWarningVisible: true})
			this.validateAllFields()
		}
	}

	NameField = () => {
		const {values, validity} = this.state
		const id = EField.Name

		return (
			<div className='field name'>
				<label htmlFor='name-input'> Name </label>
				<input
					id='name-input'
					className={cn({
						'field-input': true,
						'valid': validity[id] === true,
						'invalid': validity[id] === false,
					})}
					type='text'
					placeholder='Your name'
					value={values[id]}
					onChange={(e) => this.setFieldValue(id, e.target.value)}
					onBlur={() => this.validateField(id)}
				/>
			</div>
		)
	}

	EmailField = () => {
		const {values, validity} = this.state
		const id = EField.Email

		return (
			<div className='field email'>
				<label htmlFor='email-input'> Email </label>
				<input
					id='email-input'
					className={cn({
						'field-input': true,
						'valid': validity[id] === true,
						'invalid': validity[id] === false,
					})}
					type='email'
					placeholder='Your email'
					value={values[id]}
					onChange={(e) => this.setFieldValue(id, e.target.value)}
					onBlur={() => this.validateField(id)}
				/>
			</div>
		)
	}

	MessageField = () => {
		const {values, validity} = this.state
		const id = EField.Message

		return (
			<div className='field message'>
				<label htmlFor='message-input'> Message </label>
				<textarea
					id='message-input'
					className={cn({
						'field-input': true,
						'valid': validity[id] === true,
						'invalid': validity[id] === false,
					})}
					placeholder='Type your message here...'
					value={values[id]}
					onChange={(e) => this.setFieldValue(id, e.target.value)}
					onBlur={() => this.validateField(id)}
				/>
			</div>
		)
	}

	FormPanel = () => {
		const {isWarningVisible} = this.state

		return (
			<div className='panel form-panel'>

				<i className='stamp' />

				<this.NameField />

				<this.EmailField />

				<this.MessageField />

				<div className='form-footer'>
					<span className={cn({'warning': true, 'visible': isWarningVisible})}>
						All fields are required.
					</span>
					<div className='send-button' onClick={this.sendMessage}>
						Send
					</div>
				</div>

			</div>
		)
	}

	InfoPanel = () => {
		return (
			<div className='panel info-panel'>
				<h1 className='title'>Contact Me</h1>
				<p>
					If you have a question of any kind, please,
					send me a message and I will respond as quickly as possible.
				</p>
				<p>
					If you prefer to contact me directly,
					send an email to <a href={`mailto:${AppSettings.Email.myAddress}`}>{AppSettings.Email.myAddress}</a>.
				</p>
			</div>
		)
	}

	render () {
		const {onHide} = this.props
		const {isMessageSent} = this.state

		return (
			<div className='contact'>
				<div className='backdrop' onClick={onHide}>
					<div className='icon-close' onClick={onHide}>
						<i className='fa-icon back' />
					</div>
				</div>
				{!isMessageSent &&
					<div className='content' ref={this.content}>
						<this.InfoPanel />
						<this.FormPanel />
					</div>
				}
				{isMessageSent &&
					<div className='content visible small'>
						<div className='thank-you'>
							<div className='large'>Your message has been sent.</div>
							Thank you for your interest.<br/>
							I will respond as soon as possible.
						</div>
					</div>
				}
			</div>
		)
	}
}
