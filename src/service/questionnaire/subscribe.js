export const subscribe = (db, identifier, onChange) => {
  console.log("here")
    db.changes({
      live: true,
      include_docs: true,
      doc_ids: [identifier]
    }).on('change', onChange);
}