import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imageCompression from 'browser-image-compression';

const colors = ['#e50914', '#1f80e0', '#f5a623', '#50c878', '#9b59b6', '#3498db', '#e67e22'];

const defaultProfiles = [
  { id: 1, name: 'User 1', avatar: null },
  { id: 2, name: 'User 2', avatar: null },
  { id: 3, name: 'Kids', avatar: null },
];

const defaultAvatars = ['👩', '🧒'];

const MAX_PROFILES = 5;

const Profiles = () => {
  const navigate = useNavigate();

  const [profiles, setProfiles] = useState(() => {
    const savedProfiles = localStorage.getItem('profiles');
    return savedProfiles ? JSON.parse(savedProfiles) : defaultProfiles;
  });

  const [newProfileName, setNewProfileName] = useState('');
  const [newAvatar, setNewAvatar] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('profiles', JSON.stringify(profiles));
    } catch (e) {
      if (e.name === 'QuotaExceededError') {
        alert('Storage limit reached. Please remove some profiles or use smaller avatars.');
      } else {
        console.error(e);
      }
    }
  }, [profiles]);

  const selectProfile = (profile) => {
    localStorage.setItem('profile', JSON.stringify(profile));
    navigate('/home');
  };

  const removeProfile = (e, id) => {
    e.stopPropagation();
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const compressedFile = await imageCompression(file, {
        maxSizeMB: 0.1,          // max 0.1 MB = 100 KB
        maxWidthOrHeight: 200,   // max width or height in pixels
        useWebWorker: true,
      });

      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAvatar(reader.result);
      };
      reader.readAsDataURL(compressedFile);
    } catch (error) {
      console.error('Image compression error:', error);
      alert('Failed to process avatar image. Please try a different image.');
    }
  };

  const addProfile = () => {
    if (!newProfileName.trim()) {
      alert('Please enter a profile name');
      return;
    }

    if (profiles.length >= MAX_PROFILES) {
      alert(`Maximum of ${MAX_PROFILES} profiles allowed.`);
      return;
    }

    const newProfile = {
      id: profiles.length ? profiles[profiles.length - 1].id + 1 : 1,
      name: newProfileName.trim(),
      avatar: newAvatar,
    };

    setProfiles([...profiles, newProfile]);
    setNewProfileName('');
    setNewAvatar(null);
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: 'white', marginBottom: 50 }}>Who is watching?</h2>

      <div style={styles.profilesGrid}>
        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            style={{
              ...styles.profileCard,
              backgroundColor: colors[index % colors.length],
            }}
            onClick={() => selectProfile(profile)}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <button
              onClick={(e) => removeProfile(e, profile.id)}
              style={styles.removeButton}
              aria-label={`Remove ${profile.name}`}
              title={`Remove ${profile.name}`}
            >
              &times;
            </button>

            <div style={styles.avatar}>
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={`${profile.name} avatar`}
                  style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover' }}
                />
              ) : (
                <span style={{ fontSize: 60 }}>{defaultAvatars[index % defaultAvatars.length]}</span>
              )}
            </div>
            <div style={styles.name}>{profile.name}</div>
          </div>
        ))}

        {profiles.length < MAX_PROFILES && (
          <div style={{ ...styles.profileCard, backgroundColor: '#555', flexDirection: 'column', padding: 20 }}>
            {newAvatar ? (
              <img
                src={newAvatar}
                alt="New avatar preview"
                style={{ width: 60, height: 60, borderRadius: '50%', marginBottom: 10, objectFit: 'cover' }}
              />
            ) : (
              <span style={{ fontSize: 60, marginBottom: 10 }}>+</span>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarUpload}
              style={{ marginBottom: 10, cursor: 'pointer' }}
            />

            <input
              type="text"
              placeholder="New profile name"
              value={newProfileName}
              onChange={(e) => setNewProfileName(e.target.value)}
              style={styles.input}
              onKeyDown={(e) => {
                if (e.key === 'Enter') addProfile();
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
    height: '100vh',
    backgroundColor: '#141414',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilesGrid: {
    display: 'flex',
    gap: '40px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    cursor: 'pointer',
    width: 160,
    height: 160,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 20,
    transition: 'transform 0.2s ease',
    boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)',
    userSelect: 'none',
    position: 'relative',
    padding: 10,
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    background: 'rgba(0,0,0,0.5)',
    border: 'none',
    color: 'white',
    fontSize: 20,
    lineHeight: '20px',
    width: 30,
    height: 30,
    borderRadius: '50%',
    cursor: 'pointer',
    zIndex: 10,
    userSelect: 'none',
  },
  avatar: {
    fontSize: 60,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '8px 10px',
    borderRadius: 4,
    border: 'none',
    fontSize: 16,
    marginBottom: 10,
    outline: 'none',
  },
  addButton: {
    width: '100%',
    padding: '8px 0',
    backgroundColor: '#e50914',
    border: 'none',
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: 16,
  },
};

export default Profiles;
