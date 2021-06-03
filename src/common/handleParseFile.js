try {
  const metadata = await parseFile(file);
  // Update GUI
  console.log(metadata);
} catch (err) {}

const parseFile = async (file) => {
  return mmb.parseBlob(file, { native: true }).then((metadata) => {
    return metadata;
  });
};
