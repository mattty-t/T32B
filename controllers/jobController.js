const createJob = async (req, res) => {
  res.send('create job');
};

const getAllJobs = async (req, res) => {
  res.send('Get all Jobs');
};

const deleteJob = async (req, res) => {
  res.send('Delete Job ');
};

const updateJob = async (req, res) => {
  res.send('Update Job');
};

const showStats = async (req, res) => {
  res.send('Show Stats ');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
