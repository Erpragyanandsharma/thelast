const API_KEY = "YOUR_HUGGINGFACE_API_KEY";

async function generateImage() {
  const prompt = document.getElementById("prompt").value;
  const img = document.getElementById("result");

  if (!prompt) {
    alert("Please enter a prompt!");
    return;
  }

  img.style.display = "none";

  const response = await fetch(
    "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: prompt })
    }
  );

  const blob = await response.blob();
  const imageUrl = URL.createObjectURL(blob);

  img.src = imageUrl;
  img.style.display = "block";
}
