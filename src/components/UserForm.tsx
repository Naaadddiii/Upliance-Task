import React, { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Component for handling Name and ID
const NameAndIdForm: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");

  // Load existing user data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setName(parsedData.name || ""); // Load name if available
      setId(parsedData.id || ""); // Load ID if available
    }
  }, []);

  // Function to save name and ID in localStorage
  const saveNameAndId = () => {
    // Generate a new ID if not already set
    const newId = id || Math.random().toString(36).substr(2, 9);
    const updatedData = { name, id: newId };

    // Update localStorage with new or existing data
    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("userData") || "{}"), // Preserve existing data
        ...updatedData,
      })
    );
    setId(newId); // Update state with the generated ID
    toast.success("Name saved successfully!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        flex: 1, // Ensures the form fills the parent container
      }}
    >
      {/* Input field for entering the name */}
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        variant="outlined"
      />

      {/* Display the auto-generated ID (read-only) */}
      <TextField
        label="ID (Auto-generated)"
        value={id}
        disabled
        fullWidth
        variant="outlined"
      />

      {/* Save button to store contact details in localStorage */}
      <Button
        variant="contained"
        color="primary"
        onClick={saveNameAndId} // Save data when clicked
      >
        Save
      </Button>
      <ToastContainer />
    </Box>
  );
};

// Component for handling Contact Details
const ContactDetailsForm: React.FC = () => {
  // State to store contact details (address, email, phone)
  const [contactData, setContactData] = useState({
    address: "",
    email: "",
    phone: "",
  });

  // Load existing contact data from localStorage when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setContactData({
        address: parsedData.address || "",
        email: parsedData.email || "",
        phone: parsedData.phone || "",
      });
    }
  }, []);

  // Handle input field changes dynamically
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  // Function to save contact details in localStorage
  const saveContactData = () => {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("userData") || "{}"), // Preserve existing data
        ...contactData,
      })
    );
    toast.success("Contact details saved successfully!");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        flex: 1, // Ensures the form fills the parent container
      }}
    >
      {/* Input fields for email, phone, and address */}
      <TextField
        label="Email"
        name="email"
        value={contactData.email} // Bind to state
        onChange={handleChange} // Update state on change
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Phone"
        name="phone"
        value={contactData.phone} // Bind to state
        onChange={handleChange} // Update state on change
        variant="outlined"
        fullWidth
      />
      <TextField
        label="Address"
        name="address"
        value={contactData.address} // Bind to state
        onChange={handleChange} // Update state on change
        variant="outlined"
        fullWidth
      />

      {/* Save button to store contact details in localStorage */}
      <Button
        variant="contained"
        color="primary"
        onClick={saveContactData} // Save data when clicked
      >
        Save
      </Button>
      <ToastContainer />
    </Box>
  );
};

export { NameAndIdForm, ContactDetailsForm };
