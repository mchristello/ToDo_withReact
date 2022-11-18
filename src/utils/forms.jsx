import { useState } from "react";

export const UserForm = () => {
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };
    return {
        form,
        handleChange,
    };
};