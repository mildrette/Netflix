import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imageCompression from "browser-image-compression";

const colors = [
  "#e50914",
  "#1f80e0",
  "#f5a623",
  "#50c878",
  "#9b59b6",
  "#3498db",
  "#e67e22",
];

const defaultAvatars = ["👩", "🧒"];

const DEFAULT_KIDS_PROFILE = {
  id: 9999,
  name: "Kids",
  avatar: null,
  fixed: true,
};

const MAX_PROFILES = 5;

const getDefaultProfiles = () => [
  { id: 1, name: "User 1", avatar: null, fixed: false },
  { id: 2, name: "User 2", avatar: null, fixed: false },
  DEFAULT_KIDS_PROFILE,
];

const Profiles = () => {
  const navigate = useNavigate();

  // Load profiles from localStorage or fallback to default profiles including Kids
  const [profiles, setProfiles] = useState(() => {
    try {
      const saved = localStorage.getItem("profiles");
      if (saved) {
        const parsed = JSON.parse(saved);

        // Ensure Kids profile is always present
        if (!parsed.some((p) => p.fixed)) {
          return [...parsed, DEFAULT_KIDS_PROFILE];
        }
        return parsed;
      }
    } catch {
      // fallback below
    }
    return getDefaultProfiles();
  });

  const [newProfileName, setNewProfileName] = useState("");
  const [newAvatar, setNewAvatar] = useState(null);

  // Persist profiles to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("profiles", JSON.stringify(profiles));
    } catch (e) {
      if (e.name === "QuotaExceededError") {
        alert(
          "Local storage limit exceeded. Try removing some profiles or using smaller avatar images."
        );
      } else {
        console.error(e);
      }
    }
  }, [profiles]);

  const selectProfile = (profile) => {
    localStorage.setItem("profile", JSON.stringify(profile));
    navigate("/home");
  };

  const removeProfile = (e, id) => {
    e.stopPropagation();
    const profileToRemove = profiles.find((p) => p.id === id);
    if (profileToRemove?.fixed) {
      alert("This profile cannot be removed.");
      return;
    }
    setProfiles(profiles.filter((p) => p.id !== id));
  };

  // Compress avatar before setting it, to keep storage small
  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const options = {
        maxSizeMB: 0.1,
        maxWidthOrHeight: 200,
        useWebWorker: true,
      };
      const compressedFile = await imageCompression(file, options);
      const reader = new FileReader();

      reader.onloadend = () => {
        setNewAvatar(reader.result);
      };

      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error("Error compressing image:", error);
      alert("Failed to process avatar image. Please try a different image.");
    }
  };

  const addProfile = () => {
    if (!newProfileName.trim()) {
      alert("Please enter a profile name.");
      return;
    }

    const countNonFixed = profiles.filter((p) => !p.fixed).length;
    if (countNonFixed >= MAX_PROFILES - 1) {
      alert(`Maximum ${MAX_PROFILES} profiles allowed including Kids.`);
      return;
    }

    const newId =
      profiles.length > 0 ? Math.max(...profiles.map((p) => p.id)) + 1 : 1;

    const newProfile = {
      id: newId,
      name: newProfileName.trim(),
      avatar: newAvatar,
      fixed: false,
    };

    setProfiles([...profiles, newProfile]);
    setNewProfileName("");
    setNewAvatar(null);
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: "white", marginBottom: 50 }}>Who is watching?</h2>

      <div style={styles.profilesGrid}>
        {profiles.map((profile, idx) => (
          <div
            key={profile.id}
            style={{
              ...styles.profileCard,
              backgroundColor: colors[idx % colors.length],
            }}
            onClick={() => selectProfile(profile)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {!profile.fixed && (
              <button
                onClick={(e) => removeProfile(e, profile.id)}
                style={styles.removeButton}
                aria-label={`Remove ${profile.name}`}
                title={`Remove ${profile.name}`}
              >
                &times;
              </button>
            )}

            <div style={styles.avatar}>
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={`${profile.name} avatar`}
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <span style={{ fontSize: 60 }}>
                  {defaultAvatars[idx % defaultAvatars.length]}
                </span>
              )}
            </div>
            <div style={styles.name}>{profile.name}</div>
          </div>
        ))}

        {profiles.length < MAX_PROFILES && (
          <div
            style={{ ...styles.profileCard, backgroundColor: "#555", flexDirection: "column", padding: 20 }}
          >
            {newAvatar ? (
              <img
                src={newAvatar}
                alt="New avatar preview"
                style={{ width: 60, height: 60, borderRadius: "50%", marginBottom: 10, objectFit: "cover" }}
              />
            ) : (
              <span style={{ fontSize: 60, marginBottom: 10 }}>+</span>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              style={{ marginBottom: 10, cursor: "pointer" }}
            />

            <input
              type="text"
              placeholder="New profile name"
              value={newProfileName}
              onChange={(e) => setNewProfileName(e.target.value)}
              style={styles.input}
              onKeyDown={(e) => {
                if (e.key === "Enter") addProfile();
              }}
            />
            <button onClick={addProfile} style={styles.addButton}>
              Add Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    backgroundColor: "#141414",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profilesGrid: {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  profileCard: {
    cursor: "pointer",
    width: 160,
    height: 160,
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 20,
    transition: "transform 0.2s ease",
    boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)",
    userSelect: "none",
    position: "relative",
    padding: 10,
  },
  removeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    background: "rgba(0,0,0,0.5)",
    border: "none",
    color: "white",
    fontSize: 20,
    lineHeight: "20px",
    width: 30,
    height: 30,
    borderRadius: "50%",
    cursor: "pointer",
    zIndex: 10,
    userSelect: "none",
  },
  avatar: {
    fontSize: 60,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "8px 10px",
    borderRadius: 4,
    border: "none",
    fontSize: 16,
    marginBottom: 10,
    outline: "none",
  },
  addButton: {
    width: "100%",
    padding: "8px 0",
    backgroundColor: "#e50914",
    border: "none",
    borderRadius: 5,
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: 16,
  },
};

export default Profiles;
