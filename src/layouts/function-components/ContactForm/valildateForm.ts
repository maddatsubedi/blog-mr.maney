const validateForm = (name: string, email: string, message: string) => {
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
        return "Name is required.";
    }

    if (trimmedName.length < 3) {
        return "Name should be at least 3 characters long.";
    }

    if (trimmedName.length > 50) {
        return "Name should be less than 50 characters.";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }

    if (!trimmedMessage) {
        return "Message is required.";
    } else if (trimmedMessage.length < 10) {
        return "Message should be at least 10 characters long.";
    } else if (trimmedMessage.length > 500) {
        return "Message should be less than 500 characters.";
    }
};

export default validateForm;