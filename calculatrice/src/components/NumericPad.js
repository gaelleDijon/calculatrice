const NumericPad = () => {
  return (
    <table>
      <tr>
        <td>
          <ButtonNumber num="9" />
        </td>
        <td>
          <ButtonNumber num="8" />
        </td>
        <td>
          <ButtonNumber num="7" />
        </td>
      </tr>
      <tr>
        <td>
          <ButtonNumber num="6" />
        </td>
        <td>
          <ButtonNumber num="5" />
        </td>
        <td>
          <ButtonNumber num="4" />
        </td>
      </tr>
      <tr>
        <td>
          <ButtonNumber num="3" />
        </td>
        <td>
          <ButtonNumber num="2" />
        </td>
        <td>
          <ButtonNumber num="1" />
        </td>
      </tr>
      <tr>
        <td>
          <ButtonNumber num="0" />
        </td>
        <td> ENTER </td>
      </tr>
    </table>
  );
};
export default NumericPad;
