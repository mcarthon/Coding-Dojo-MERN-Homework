const mongoPatch = ( array, id, updateData ) => {

    if ( Object.keys(updateData).length < 1 ) {

        return null;

    }

    let record = array.filter( element => element.id === id )[0];

    const updateKeys = Object.keys( updateData );

    const recordKeys = Object.keys( record );

    for ( index in updateKeys ) {

        if ( recordKeys.indexOf( updateKeys[ index ] ) !== -1 ) {

            record[ updateKeys[ index ] ] = updateData[ updateKeys[ index ] ];

        }

    }

    return record;

};

const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false,
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false,
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false,
    },
  ];

  const id1 = 3;
  const updateData1 = { redBeltStatus: true, isLateToday: true };

console.log( mongoPatch( students, id1, updateData1 ) );