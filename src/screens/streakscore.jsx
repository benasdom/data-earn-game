
export function updateStreakScore(currentDate, lastActionDate) {
    // Parse the dates
    const current = new Date(currentDate);
    const lastAction = new Date(lastActionDate);
  
    // Retrieve streak data from localStorage
    let streakData = JSON.parse(localStorage.getItem("streakData")) || {
      currentStreak: 0,
      bestStreak: 0,
      lastActionDate: null,
    };
  
    const { currentStreak, bestStreak } = streakData;
  
    // Calculate the difference in days
    const diffInDays = Math.floor((current - lastAction) / (1000 * 60 * 60 * 24));
  
    if (diffInDays === 1) {
      // Consecutive day: Increment streak
      streakData.currentStreak += 1;
    } else if (diffInDays > 1) {
      // Missed a day: Reset streak
      streakData.currentStreak = 1;
    } else if (diffInDays === 0) {
      // Same day: Do nothing (already updated)
      return streakData;
    }
  
    // Update best streak if the current streak exceeds it
    if (streakData.currentStreak > bestStreak) {
      streakData.bestStreak = streakData.currentStreak;
    }
  
    // Update last action date
    streakData.lastActionDate = currentDate;
  
    // Save updated streak data to localStorage
    localStorage.setItem("streakData", JSON.stringify(streakData));
  
    return streakData;
  }
  