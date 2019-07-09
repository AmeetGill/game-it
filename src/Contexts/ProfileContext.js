import React from "react";

export const profile = { name: "", age: "", pubgId: "", accessToken: "" };

export const ProfileContext = React.createContext({
	profile: profile,
	updateProfile: profilePassed => {
		profile = profilePassed;
		console.log('you bro it is updating');
	}
});
