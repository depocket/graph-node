use graph::runtime::{AscPtr, AscType};

#[repr(C)]
#[derive(AscType)]
pub(crate) struct AscEthereumEvent<T>
where
    T: AscType,
{
    pub address: AscPtr<AscAddress>,
    pub log_index: AscPtr<AscBigInt>,
    pub transaction_log_index: AscPtr<AscBigInt>,
    pub log_type: AscPtr<AscString>,
    pub block: AscPtr<AscEthereumBlock>,
    pub transaction: AscPtr<T>,
    pub params: AscPtr<AscLogParamArray>,
}
