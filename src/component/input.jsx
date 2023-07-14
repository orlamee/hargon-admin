import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'


const Input = ({
  name,
  type,
  placeholder,
  onBlur,
  onChange,
  value,
  label,
  bottomText,
  ...rest
}) => {
  const [secureText, setSecureText] = React.useState(true)
  return type === 'tel' ? (
    <>
      <InputGroup>
        <InputGroup.Text>+234</InputGroup.Text>
        <Form.Control
          id="inlineFormInputGroupUsername"
          type="tel"
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          {...rest}
        />
      </InputGroup>
    </>
  ) : type === 'login-email' ? (
    <InputGroup className="mb-3">
      <InputGroup.Text>
        <i className="bi bi-envelope"></i>
      </InputGroup.Text>
      <Form.Control
        id="inlineFormInputGroupUsername"
        type="email"
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...rest}
      />
    </InputGroup>
  ) : type === 'password' ? (
    <Form.Group style={{ position: 'relative' }}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        name={name}
        placeholder={placeholder}
        type={secureText ? 'password' : 'text'}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="password-input"
        {...rest}
      />
      {bottomText && (
        <Form.Text className="text-muted">{bottomText} </Form.Text>
      )}
      {secureText ? (
        <span
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: '12px',
            right: '10px',
          }}
          onClick={() => setSecureText(false)}
        >
          <i className="bi bi-eye me-2 fs-5"></i>
        </span>
      ) : (
        <span
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: '12px',
            right: '10px',
          }}
          onClick={() => setSecureText(true)}
        >
          <i className="bi bi-eye-slash me-2 fs-5"></i>
        </span>
      )}
    </Form.Group>
  ) : (
    <>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        {...rest}
      />
      {bottomText && (
        <Form.Text className="text-muted">{bottomText} </Form.Text>
      )}
    </>
  )
}

export default Input
