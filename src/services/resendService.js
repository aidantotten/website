export async function sendContactFormEmail(formData) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    return await response.json();
  } catch (error) {
    console.error("Error sending contact form email:", error);
    return { success: false, error: "Network error. Please try again." };
  }
}
