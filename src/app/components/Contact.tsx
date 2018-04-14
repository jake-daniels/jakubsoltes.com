
import React from 'react'
import {findDOMNode} from 'react-dom'

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
}

interface IProps {
	onSend: (data: IContactData) => void,
	onHide: () => void,
}

export default class Contact extends React.PureComponent<IProps, IState> {

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
	}

	content: Element | null = null

	componentDidMount () {
		setTimeout(() => {
			const ref = this.content as Element
			const node = findDOMNode(ref) as Element
			if (node) {
				node.classList.add('visible')
			}
		}, 0)
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
			this.props.onHide()
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
				<label> Name </label>
				<input
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
				<label> Email </label>
				<input
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
				<label> Message </label>
				<textarea
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
					send an email to <a href={`mailto:${APP.Email.myAddress}`}>{APP.Email.myAddress}</a>.
				</p>
			</div>
		)
	}

	render () {
		const {onHide} = this.props

		return (
			<div className='contact'>
				<div className='backdrop'>
					<div className='icon-close' onClick={onHide}>
						<i className='fa-icon back' />
					</div>
				</div>
				<div className='content' ref={(ref) => this.content = ref}>
					<this.InfoPanel/>
					<this.FormPanel/>
				</div>
			</div>
		)
	}
}
