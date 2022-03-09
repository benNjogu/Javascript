
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function () {
        if (running)
            throw new Error('Stopwatch has already started')

        running = true;

        startTime = new Date();

        console.log('started');
    }

    this.stop = function () {
        if (!running)
            throw new Error('Stopwatch is not started.')

        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
        console.log('stopped at ' + duration);
    }

    this.reset = function () {
        startTime = null;
        endTime = null;
        running = falsel;
        duration = 0;

        console.log('reset');
    }

    Object.defineProperty(this, 'duration', {
        get: function () { return duration; }
    });

}
