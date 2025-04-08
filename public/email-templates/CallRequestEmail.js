export const CallRequestEmail = ({ userName, userPhone, isAdmin }) => (
    <div style={{
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        margin: '0 auto',
        maxWidth: '600px',
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        border: '1px solid #e1e1e1',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
        <div style={{
            textAlign: 'center',
            marginBottom: '20px',
            paddingBottom: '20px',
            borderBottom: '1px solid #e1e1e1'
        }}>
            <img
                src="https://i.ibb.co/T1wrb9Z/logo.png" 
                alt="Gharsewa Logo"
                style={{ width: '80px', height: 'auto' }} 
            />
        </div>
        <h1 style={{
            textAlign: 'center',
            color: '#EE7214',
            fontSize: '26px',
            margin: '20px 0',
            fontWeight: '600'
        }}>
            {isAdmin ? 'New Call Request!' : 'Thank You for Your Request, ' + userName + '!'}
        </h1>
        <p style={{
            textAlign: 'center',
            fontSize: '16px',
            margin: '0 0 20px 0'
        }}>
            {isAdmin 
                ? `A user has requested a call back. Here are the details:`
                : `Thank you for reaching out to us. Our team will get in touch with you shortly to assist with your request.`}
        </p>
        <div style={{
            textAlign: 'center',
            padding: '15px',
            backgroundColor: '#f8f8f8',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px'
        }}>
            <h2 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                margin: '0'
            }}>
                Name: {userName}
            </h2>
            <h2 style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#333',
                margin: '0'
            }}>
                Phone: {userPhone}
            </h2>
        </div>
        <p style={{
            textAlign: 'center',
            fontSize: '16px',
            margin: '0 0 20px 0'
        }}>
            {isAdmin 
                ? 'Please follow up with this user as soon as possible.'
                : 'We look forward to assisting you with your home fixing needs.'}
        </p>
        <p style={{
            textAlign: 'center',
            fontSize: '16px',
            margin: '0 0 30px 0',
            color: '#666'
        }}>
            {isAdmin 
                ? 'You can ignore this message if you have already contacted the user.'
                : 'If you did not make this request, please contact our support team.'}
        </p>
        <footer style={{
            textAlign: 'center',
            fontSize: '14px',
            color: '#555',
            borderTop: '1px solid #e1e1e1',
            paddingTop: '20px',
            paddingBottom: '10px',
            marginTop: '30px',
            backgroundColor: '#f9f9f9',
            borderRadius: '0 0 8px 8px'
        }}>
            <p style={{ margin: '0', fontSize: '15px' }}>Best regards,</p>
            <p style={{ margin: '5px 0 0 0', fontSize: '16px', fontWeight: 'bold' }}><strong>Gharsewa Team</strong></p>
        </footer>
    </div>
);

export default CallRequestEmail;