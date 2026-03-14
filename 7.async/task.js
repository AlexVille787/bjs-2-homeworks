class AlarmClock {
  constructor() {
    this.intervalId = null;
    this.alarmCollection = [];
  }
  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    const hasSameTime = this.alarmCollection.some(
      (alarm) => alarm.time === time,
    );
    if (hasSameTime) {
      console.warn("Уже присутствует звонок на это же время");
    }
    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    });
  }
  removeClock(time) {
    const filterAlarmCollection = this.alarmCollection.filter(
      (alarm) => alarm.time !== time,
    );
    this.alarmCollection = filterAlarmCollection;
  }
  getCurrentFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  start() {
    if (this.intervalId !== null) {
      return;
    }
    const intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        const currentTime = this.getCurrentFormattedTime();
        if (alarm.time === currentTime && alarm.canCall === true) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);
    this.intervalId = intervalId;
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
