"use client"
import { useState } from "react"
import { useAuthors } from "@/providers/AuthorsProvider"

export default function AuthorForm({ params }: { params: { id: string | null } }) {
    const { modifyAuthor, createAuthor } = useAuthors()
    const [form, setForm] = useState({
        id: "",
        name: "",
        birthDate: "",
        description: "",
        image: "",
    })
    const [errors, setErrors] = useState({
        id: "",
        name: "",
        birthDate: "",
        description: "",
        image: "",
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setForm({ ...form, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: "" })
    }

    function validate() {
        const newErrors = {
            id: !params.id && !form.id ? "ID is required" : "",
            name: !form.name ? "Name is required" : "",
            birthDate: !form.birthDate ? "Birth date is required" : "",
            description: !form.description ? "Description is required" : "",
            image: !form.image ? "Image URL is required" : "",
        }
        setErrors(newErrors)
        return Object.values(newErrors).every(e => e === "")
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!validate()) return
        if (params.id) {
            modifyAuthor(Number(params.id), new Date(form.birthDate), form.name, form.description, form.image)
        } else {
            createAuthor(Number(form.id), new Date(form.birthDate), form.name, form.description, form.image)
        }
    }

    if (!params.id) {
        return (
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="text-3xl">Add new author</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    <input name="id" placeholder="ID" value={form.id} onChange={handleChange}
                        aria-invalid={!!errors.id} aria-describedby="id-error" />
                    {errors.id && <span id="id-error">{errors.id}</span>}

                    <input name="name" placeholder="Name" value={form.name} onChange={handleChange}
                        aria-invalid={!!errors.name} aria-describedby="name-error" />
                    {errors.name && <span id="name-error">{errors.name}</span>}

                    <input name="birthDate" type="date" value={form.birthDate} onChange={handleChange}
                        aria-invalid={!!errors.birthDate} aria-describedby="birthDate-error" />
                    {errors.birthDate && <span id="birthDate-error">{errors.birthDate}</span>}

                    <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}
                        aria-invalid={!!errors.description} aria-describedby="description-error" />
                    {errors.description && <span id="description-error">{errors.description}</span>}

                    <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange}
                        aria-invalid={!!errors.image} aria-describedby="image-error" />
                    {errors.image && <span id="image-error">{errors.image}</span>}

                    <button type="submit">Save</button>
                </form>
            </div>
        )
    } else {
        return (
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="text-3xl">Modify author</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md">
                    <input name="name" placeholder="Name" value={form.name} onChange={handleChange}
                        aria-invalid={!!errors.name} aria-describedby="name-error" />
                    {errors.name && <span id="name-error">{errors.name}</span>}

                    <input name="birthDate" type="date" value={form.birthDate} onChange={handleChange}
                        aria-invalid={!!errors.birthDate} aria-describedby="birthDate-error" />
                    {errors.birthDate && <span id="birthDate-error">{errors.birthDate}</span>}

                    <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange}
                        aria-invalid={!!errors.description} aria-describedby="description-error" />
                    {errors.description && <span id="description-error">{errors.description}</span>}

                    <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange}
                        aria-invalid={!!errors.image} aria-describedby="image-error" />
                    {errors.image && <span id="image-error">{errors.image}</span>}

                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}
