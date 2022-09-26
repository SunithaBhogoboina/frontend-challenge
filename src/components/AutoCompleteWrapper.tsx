import React, { useState }  from 'react';
import { CUIAutoComplete } from "chakra-ui-autocomplete";
import { useNavigate } from "react-router-dom";

const AutoCompleteWrapper = (props) => {
    const navigate = useNavigate();
    const autoCompleteData = props.autoCompleteData;
    const [selectedItems, setSelectedItems] : any = useState([]);

    const handleSelectedItemsChange = (pairing) => {
        if (pairing) {
          setSelectedItems(pairing);
        }
        navigate(
          {
            pathname: `/pairing/{`+ pairing[0].label +`}`
          }
        )
      }

    return(
        <CUIAutoComplete 
          label="Choose Currency Pair"
          placeholder="Enter Symbol"
          items={autoCompleteData}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
          tagStyleProps={{
            rounded: "full",
            pt: 1,
            pb: 2,
            px: 2,
            fontSize: "1rem"
          }}
          />
    )
}

export default AutoCompleteWrapper;